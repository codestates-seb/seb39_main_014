package com.server.soopool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SoopoolApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoopoolApplication.class, args);
	}

}