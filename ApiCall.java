import java.net.URL;
import java.net.URLEncoder;
import java.util.Iterator;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

public class ApiCall {
	public static void main(String[] args) throws Exception {
		// http://203.247.66.146/iros/RetrieveLifeIndexService/getSensorytemLifeList?ServiceKey=OfSYMQJy1hp02v2ti7MfWVLNS2M%2F5pS7OmxFCKwi2MrqNkFuFfnycVgAjjwUP79m3ENGpslbePrixvufYteRNg&AreaNo=1100000000&numOfRows=999&pageSize=999&pageNo=1&startPage=1
	        StringBuilder urlBuilder = new StringBuilder("http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData"); /*URL*/
	        urlBuilder.append("?" + URLEncoder.encode("ServiceKey","UTF-8") + "=OfSYMQJy1hp02v2ti7MfWVLNS2M%2F5pS7OmxFCKwi2MrqNkFuFfnycVgAjjwUP79m3ENGpslbePrixvufYteRNg%3D%3D"); /*Service Key*/
       		urlBuilder.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode("20160905", "UTF-8")); /*검색건수*/
       		urlBuilder.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode("1700", "UTF-8")); /*검색건수*/
       		urlBuilder.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode("57", "UTF-8")); /*검색건수*/
       		urlBuilder.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode("127", "UTF-8")); /*검색건수*/
	        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("999", "UTF-8")); /*검색건수*/
	        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지 번호*/
	        /*URL url = new URL(urlBuilder.toString());
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");
	        conn.setRequestProperty("Content-type", "application/xml");
	        BufferedReader rd;
	        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
	            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        } else {
	            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
	        }
	        StringBuilder sb = new StringBuilder();
	        String line;
	        while ((line = rd.readLine()) != null) {
	            sb.append(line);
	        }
	        rd.close();
	        conn.disconnect();
	        //System.out.println(sb.toString());
*/	        SAXReader saxReader = new SAXReader();
	        Document document = saxReader.read(new URL(urlBuilder.toString()));
	        System.out.println(document.toString());
	        Element root = document.getRootElement();
	        for ( Iterator i = root.elementIterator("body"); i.hasNext(); ) {
	            Element element = (Element) i.next();
	            System.out.println(element.getName());
	            for ( Iterator i2 = element.elementIterator(); i2.hasNext(); ) {
		            Element element2 = (Element) i2.next();
		            System.out.println(element2.getName());
		            // do something
		        }
	            // do something
	        }
	}
}
