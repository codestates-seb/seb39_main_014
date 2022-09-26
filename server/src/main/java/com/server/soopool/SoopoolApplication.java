package com.server.soopool;

import com.server.soopool.member.entity.Member;
import com.server.soopool.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.security.Principal;


// JPA Auditing 활성화
@Slf4j
@EnableJpaAuditing
@SpringBootApplication()
public class SoopoolApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoopoolApplication.class, args);
	}

	@Bean
	public CommandLineRunner dataSave(MemberRepository memberRepository) {
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				Member member = memberRepository.save(
						Member.builder()
							.name("홍길동")
							.userId("hgd2022")
							.password("123456789")
							.email("hgd2022@naver.com")
							.nickname("MrHong")
							.build()
				);
			}
		};
	}
}