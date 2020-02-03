import PageManager from './page-manager';
const Instafeed = require('react-instafeed');

export default class Home extends PageManager {

onReady() {

        if (this.context.showInstagramFeed && this.context.instagramAccessToken) {
            const instafeed = new Instafeed({
                accessToken: this.context.instagramAccessToken,
                resolution: 'standard_resolution',
                limit: this.context.instagramPostsCount,
                imageTemplate: '<div class=\"instagramFeed-post\"><div class=\"instagramFeed-image\"><img src=\"{{model.images.standard_resolution.url}}\"></div><div class=\"instagramFeed-hover\"><a href=\"{{link}}\" target="_blank"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                videoTemplate: '<div class=\"instagramFeed-post\"><div class=\"instagramFeed-image\"><img src=\"{{model.images.standard_resolution.url}}\"></div><div class=\"instagramFeed-hover\"><a href=\"{{link}}\" target="_blank"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                // filter: (image) => image.type.indexOf('image') >= 0,
            });

            instafeed.run();
        }
    }
}
