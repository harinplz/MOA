package com.ssafy.moa.api.service;

import com.ssafy.moa.api.dto.BuddyDto.*;
import com.ssafy.moa.api.entity.Member;

public interface BuddyService {
    Long saveKoreanBuddyInfo(KoreanBuddyPostRequest koreanBuddyPostRequest);
    Long saveForeignerBuddyInfo(Long memberId, ForeignerBuddyPostRequest foreignerBuddyPostRequest);
    Long findMatchingBuddy(Long memberId);
    Integer deleteBuddy(Long memberId);
    Long findWithBuddyDate(Long memberId);
    Integer findBuddy(Member member);
}
