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