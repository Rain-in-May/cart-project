package org.KwonEunbi.api.security.config;
import lombok.RequiredArgsConstructor;

import org.KwonEunbi.api.security.domain.SecurityProvider;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    private SecurityProvider provider;
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Disable CSRF (cross site request forgery)
        http.csrf().disable();

        // No session will be created or used by spring security
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Entry points
        http.authorizeRequests()//
                .antMatchers("/users/signin").permitAll()//
                .antMatchers("/users/signup").permitAll()//
                .antMatchers("/users/findId/{id}").permitAll()//
                .antMatchers("/users/checkId/{id}").permitAll()//
                .antMatchers("/users/checkEmail/{id}").permitAll()//
                .antMatchers("/exhbns").permitAll()
                .antMatchers("/exhbns/all").permitAll()
                .antMatchers("/exhbns/allInfo").permitAll()
                .antMatchers("/exhbns/{id}").permitAll()
                .antMatchers("/exhbns/find/{id}").permitAll()
                .antMatchers("/exhbns/now").permitAll()
                .antMatchers("/exhbns/fin").permitAll()
                .antMatchers("/exhbns/topList").permitAll()
                .antMatchers("/exhbns/search/{exhbnTitle}").permitAll()
                .antMatchers("/exhbns/hall/{id}").permitAll()
                .antMatchers("/exhbns/halls/{id}").permitAll()
                .antMatchers("/exhbns/totalscore").permitAll()
                .antMatchers("/halls").permitAll()
                .antMatchers("/halls/one/{id}").permitAll()
                .antMatchers("/halls/find/{id}").permitAll()
                .antMatchers("/reviews").permitAll()
                .antMatchers("/reviews/{id}").permitAll()
                .antMatchers("/reviews/exhbn/{id}").permitAll()
                .antMatchers("/wishlist").permitAll()
                .antMatchers("/analyses/review/{id}").permitAll()
                .antMatchers("/recommends/{id}").permitAll()
                .antMatchers("/h2-console/**/**").permitAll()
                // Disallow everything else..
                .anyRequest().authenticated();

        // If a user try to access a resource without having enough permissions
        http.exceptionHandling().accessDeniedPage("/login");

        // Apply JWT
        http.apply(new SecurityConfig(provider));

        // Optional, if you want to test the API from a browser
        // http.httpBasic();
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/**")

                // allow anonymous resource requests
                .antMatchers(
                        "/",
                        "/h2-console/**"
                );
    }
}