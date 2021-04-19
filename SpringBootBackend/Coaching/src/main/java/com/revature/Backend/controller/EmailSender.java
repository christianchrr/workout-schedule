package com.revature.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.revature.Backend.model.User;

import javax.mail.internet.MimeMessage;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.stream.IntStream;

@RequestMapping("/api/v1")
@Controller
public class EmailSender {

    @Autowired
    SpringTemplateEngine templateEngine;

    @Autowired
    private JavaMailSender sender;

    @RequestMapping("/getdetails")
    public @ResponseBody User sendMail(@RequestBody User user) throws Exception {

        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());
        
         
        char[] sequence = new char[8]; 
         
        Random pass = new Random();
        for (int i = 0; i < 8; i++) { 
        	sequence[i] = (char)(pass.nextInt(25) + 97);
        }
        String generatedpass = new String(sequence); 
        user.setPassword(generatedpass);

        Map<String, Object> model = new HashMap<String, Object>();
        model.put("fname",user.getFname());
        model.put("lname",user.getLname());
        model.put("password", user.getPassword());

        Context context = new Context();
        context.setVariables(model);
        String html = templateEngine.process("email-template", context);

        try {
            helper.setTo(user.getEmail());
            helper.setText(html,true);
            helper.setSubject("Welcome to the Athlete's Portal!");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }
        sender.send(message);

        return user;

    }
}
