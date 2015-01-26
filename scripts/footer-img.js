// 	This JavaScript/jQuery snippet changes the image and caption that appear in the global footer. 
//	It has been extracted to a stand-alone file so that it can be shared across applications, 
//	keeping the footer consistent across applications. 
$(document).ready(function(){
	({
		server : "https://www.nationalarchives.gov.uk/",
		imageSource : "images/global/inf-2-43-1931-art-class.jpg",
		imageDescription : "Art class at a Junior School in Holloway, 1939-1945", 
		linkText : "INF 2/43 (1931)",
		linkHref : "https://www.flickr.com/photos/nationalarchives/14770698118/",
		linkTitle : "External website - opens in new window",
		linkTarget : "_blank",
		init : function() {
			var caption = $('#flickr-caption'), 
				imageContainer = $('#flickr-image'),
				image = imageContainer.find('img'),
				imageLink = imageContainer.find('a');

			caption.text(this.imageDescription);

			imageLink.attr('href', this.linkHref);

			image.attr({'src' : this.server + this.imageSource, 'alt' : this.imageDescription});

			$('<a>', {
				href : this.linkHref,
				title : this.linkTitle,
				text : this.linkText,
				target : this.linkTarget
			}).appendTo(caption).before(' (').after(')');
		}
	}).init();
})