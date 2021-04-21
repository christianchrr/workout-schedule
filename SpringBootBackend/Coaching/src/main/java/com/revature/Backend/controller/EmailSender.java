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
import com.revature.Backend.repository.CoachingRepository;

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
    
    @Autowired
    private CoachingRepository repo; 

    @RequestMapping("/getdetails")
    public @ResponseBody User sendMail(@RequestBody User user) throws Exception {

        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());
        
        user.setPassword("password");
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("email",user.getEmail());
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
    
    @RequestMapping("/recovery")
    public @ResponseBody void recovery(@RequestBody String email) throws Exception {

        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());

        String password = repo.recoverPass(email.toLowerCase()); 
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("password", password);

        Context context = new Context();
        context.setVariables(model);
        String html = templateEngine.process("recovery", context);

        try {
            helper.setTo(email);
            helper.setText(html,true);
            helper.setSubject("Athlete's Portal: Password Recovery Request");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }
        sender.send(message);
    }
}
