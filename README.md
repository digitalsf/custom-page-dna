
# Strategic Factory Storefront

Repository for custom html, css and javascript used on the storefront.




## Appendix

This repo is setup to use [https://www.jsdelivr.com/](https://www.jsdelivr.com/) to access the assets via CDN directly from github. 

This allows CSS and JS to be managed via VCS for better management and update tracking. As well, allows more than one person to be in the admin making adjustments without hindering each other. 
* CSS is linked in the header and used import to pull in Bootstap 5.X
* JS is just included in the footer

HTML files are a backup and should be modified then applied to the site.
## Usage/Examples

Any files added are directly accessiable via the CDN without additional work. Simply change the file name to grab a new file. 

```css
[https://cdn.jsdelivr.net/gh/digitalsf/custom-page-dna@main/style.css](https://cdn.jsdelivr.net/gh/digitalsf/custom-page-dna@main/style.css)https://cdn.jsdelivr.net/gh/digitalsf/custom-page-dna@main/style.css
```
