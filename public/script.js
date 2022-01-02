function get_ogp() {
    const query = document.getElementById("ogp-api").value;
    // const url = "https://ogp-api-yu9824.vercel.app/api/ogp?url=" + query;
    const url = "/api/ogp?url=" + query;
    
    window.open(url, "_blank");
}