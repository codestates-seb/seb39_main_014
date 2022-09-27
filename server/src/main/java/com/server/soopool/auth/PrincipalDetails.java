package com.server.soopool.auth;

import com.server.soopool.member.entity.Member;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

public class PrincipalDetails implements UserDetails , OAuth2User , Serializable {

    private final Member member;
    private Map<String, Object> attributes;

    private PrincipalDetails(Member member, Map<String, Object> attributes){
        this.member = member;
        this.attributes = attributes;
    }

    public static PrincipalDetails general(Member member) {
        return new PrincipalDetails(member,null);
    }

    public static PrincipalDetails oauth2(Member member, Map<String, Object> attributes){
        return new PrincipalDetails(member,attributes);
    }

    public Long getMemberId() {return member.getId();}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        member.getRoleList().forEach(role -> authorities.add(() -> role));
        return authorities;
    }

    @Override
    public String getPassword() {
        return member.getPassword();
    }

    @Override
    public String getUsername() {
        return member.getUserId();
    }

    @Override
    public boolean isAccountNonExpired() { // 계정이 만료되지 않았는지 ( true는 만료되지 않음을 의미한다. )
        return true;
    }

    @Override
    public boolean isAccountNonLocked() { // 계정이 잠겨있지 않았는지를 리턴 ( true는 잠겨있지 않음 )
        return true;
    } // 계정이 잠겨있지 않았는지를 리턴 ( true는 잠겨있지 않음 )

    @Override
    public boolean isCredentialsNonExpired() { //계정의 패스워드가 만료되지 않았는지 리턴 ( true는 만료되지 않음 )
        return true;
    } //계정의 패스워드가 만료되지 않았는지 리턴 ( true는 만료되지 않음 )

    @Override
    public boolean isEnabled() { // 계정이 사용가능한 계정인지를 리턴한다. (true는 사용가능을 의미.)
        return true;
    } // 계정이 사용가능한 계정인지를 리턴한다. (true는 사용가능을 의미.)

    //OAuth2User
    @Override
    public Map<String, Object> getAttributes() {return null;}

    @Override
    public String getName() {return null;}
}
