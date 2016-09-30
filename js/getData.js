function getParkList(){
    JavascriptBridge.getParkList();
}

function getParkProgramList(pidx){
   JavascriptBridge.getParkProgramList(pidx);
}

function getWeather(lat, lng){
   JavascriptBridge.getWeather(lat, lng);
}

function getPM1025(areaName){
	JavascriptBridge.getPM1025(areaName);
}

function getTourist(lat, lng, contentTypeId){
	JavascriptBridge.getTourist(lat, lng, contentTypeId);
}

function getTourist(lat, lng, contentTypeId, areaCode, sigunguCode){
	JavascriptBridge.getTourist(lat, lng, contentTypeId, areaCode, sigunguCode);
}

function getDetailIntro(contentId, contentTypeId){
	JavascriptBridge.getDetailIntro(contentId, contentTypeId);
}

function getDetailInfo(contentId, contentTypeId){
	JavascriptBridge.getDetailInfo(contentId, contentTypeId);
}

function getDetailTitle(contentTypeId, title){
    if(contentTypeId == '12'){
		if(title == 'accomcount'){
		    return '수용인원';
		}else if(title == 'chkbabycarriage'){
		    return '유모차 대여 여부';
		}else if(title == 'chkcreditcard'){
		    return '신용카드 가능 여부';
		}else if(title == 'chkpet'){
		    return '애완동물 가능 여부';
		}else if(title == 'expagerange'){
		    return '체험가능 연령';
		}else if(title == 'expguide'){
		    return '체험안내';
		}else if(title == 'heritage1'){
		    return '세계 문화유산 유무';
		}else if(title == 'heritage2'){
		    return '세계 자연유산 유무';
		}else if(title == 'heritage3'){
		    return '세계 기록유산 유무';
		}else if(title == 'infocenter'){
		    return '문의 및 안내';
		}else if(title == 'opendate'){
		    return '개장일';
		}else if(title == 'parking'){
		    return '주차시설';
		}else if(title == 'restdate'){
		    return '쉬는날';
		}else if(title == 'useseason'){
		    return '이용시기';
		}else if(title == 'usetime'){
		    return '이용시간';
		}
	}else if(contentTypeId == '14'){
        if(title == 'accomcountculture'){
            return '수용인원';
        }else if(title == 'chkbabycarriageculture'){
            return '유모차 대여 여부';
        }else if(title == 'chkcreditcardculture'){
            return '신용카드 가능 여부';
        }else if(title == 'chkpetculture'){
            return '애완동물 가능 여부';
        }else if(title == 'discountinfo'){
            return '할인정보';
        }else if(title == 'infocenterculture'){
            return '문의 및 안내';
        }else if(title == 'parkingculture'){
            return '주차시설';
        }else if(title == 'parkingfee'){
            return '주차요금';
        }else if(title == 'restdateculture'){
            return '쉬는날';
        }else if(title == 'usefee'){
            return '이용요금';
        }else if(title == 'usetimeculture'){
            return '이용시간';
        }else if(title == 'scale'){
            return '규모';
        }else if(title == 'spendtime'){
            return '관람 소요시간';
        }
    }else if(contentTypeId == '15'){
        if(title == 'agelimit'){
            return '관람 가능연령';
        }else if(title == 'bookingplace'){
            return '예매처';
        }else if(title == 'discountinfofestival'){
            return '할인정보';
        }else if(title == 'eventenddate'){
            return '행사 종료일';
        }else if(title == 'eventhomepage'){
            return '행사 홈페이지';
        }else if(title == 'eventplace'){
            return '행사 장소';
        }else if(title == 'eventstartdate'){
            return '행사 시작일';
        }else if(title == 'festivalgrade'){
            return '축제등급';
        }else if(title == 'placeinfo'){
            return '행사장 위치안내';
        }else if(title == 'playtime'){
            return '공연시간';
        }else if(title == 'program'){
            return '행사 프로그램';
        }else if(title == 'spendtimefestival'){
            return '관람 소요시간';
        }else if(title == 'sponsor1'){
            return '주최자 정보';
        }else if(title == 'sponsor1tel'){
            return '주최자 연락처';
        }else if(title == 'sponsor2'){
            return '주관사 정보';
        }else if(title == 'sponsor2tel'){
            return '주관사 연락처';
        }else if(title == 'subevent'){
            return '부대행사';
        }else if(title == 'usetimefestival'){
            return '이용요금 (이용시간)';
        }
    }else if(contentTypeId == 39){
        if(title == 'chkcreditcardfood'){
            return '신용카드 가능 여부';
        }else if(title == 'discountinfofood'){
            return '할인정보';
        }else if(title == 'firstmenu'){
            return '대표 메뉴';
        }else if(title == 'infocenterfood'){
            return '문의 및 안내';
        }else if(title == 'kidsfacility'){
            return '어린이 놀이방';
        }else if(title == 'opendatefood'){
            return '개업일';
        }else if(title == 'opentimefood'){
            return '영업시간';
        }else if(title == 'packing'){
            return '포장 가능 여부';
        }else if(title == 'parkingfood'){
            return '주차시설';
        }else if(title == 'reservationfood'){
            return '예약안내';
        }else if(title == 'restdatefood'){
            return '쉬는날';
        }else if(title == 'scalefood'){
            return '규모';
        }else if(title == 'seat'){
            return '좌석수';
        }else if(title == 'smoking'){
            return '금연/흡연 여부';
        }else if(title == 'treatmenu'){
            return '취급 메뉴';
        }
    }
}
