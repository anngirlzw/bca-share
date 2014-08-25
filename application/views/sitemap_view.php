<?php header ("Content-Type:text/xml"); ?>
<?php echo '<?xml version="1.0" encoding="UTF-8"?>';?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url> <!-- home -->
    <loc><? echo base_url(); ?></loc> 
  </url>

  <url> <!-- home -->
    <loc><? echo base_url(); ?>home</loc> 
  </url>

  <url> <!-- #bcastrength -->
    <loc><? echo base_url(); ?>bcastrength</loc> 
  </url>

  <!-- ABOUT -->

  <url> <!-- what is bca? -->
    <loc><? echo base_url(); ?>bca-campaign</loc> 
  </url>

  <url> <!-- learn more -->
    <loc><? echo base_url(); ?>learn-more</loc> 
  </url>

  <url> <!-- global ambassadors -->
    <loc><? echo base_url(); ?>global-ambassadors</loc> 
  </url>

  <url> <!-- pink ribbon products -->
    <loc><? echo base_url(); ?>pink-ribbon-products</loc> 
  </url>

  <url> <!-- press -->
    <loc><? echo base_url(); ?>press</loc> 
  </url>

  <!-- :: OUR STORIES :: -->

  <url> <!-- jeanette and david -->
    <loc><? echo base_url(); ?>jeanette-story</loc> 
  </url>

  <url> <!-- jamie and ted -->
    <loc><? echo base_url(); ?>jamie-story</loc> 
  </url>

  <url> <!-- forbes family -->
    <loc><? echo base_url(); ?>forbes-story</loc> 
  </url>

  <url> <!-- shen family -->
    <loc><? echo base_url(); ?>shen-sotry</loc> 
  </url>
</urlset>