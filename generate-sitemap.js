import fs from "fs-extra";
import { SitemapStream, streamToPromise } from "sitemap";

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({
      hostname: "https://light-weight.netlify.app/",
    });

    // 웹사이트 페이지를 sitemap에 추가
    sitemapStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
    sitemapStream.write({ url: "/about", changefreq: "weekly", priority: 0.8 });

    sitemapStream.end();

    // sitemap 스트림을 문자열로 변환
    const sitemapXML = await streamToPromise(sitemapStream).then((data) =>
      data.toString()
    );

    // sitemap.xml 파일로 저장
    await fs.outputFile("public/sitemap.xml", sitemapXML);

    console.log("Sitemap이 성공적으로 생성되었습니다!");
  } catch (error) {
    console.error("Sitemap 생성 중 오류가 발생했습니다:", error);
  }
}

generateSitemap();
