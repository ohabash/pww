import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import nod from './common/nod';
import PageManager from './page-manager';
import { api } from '@bigcommerce/stencil-utils';
import { defaultModal } from './global/modal';
const Instafeed = require('./custom/instagram-feed');

export default class WishList extends PageManager {
    constructor(context) {
        super(context);

        this.options = {
            template: 'account/add-wishlist',
        };

        return this;
    }

    /**
     * Creates a confirm box before deleting all wish lists
     */
    wishlistDeleteConfirm() {
        $('body').on('click', '[data-wishlist-delete]', event => {
            const confirmed = window.confirm(this.context.wishlistDelete);

            if (confirmed) {
                return true;
            }

            event.preventDefault();
        });
    }

    registerAddWishListValidation($addWishlistForm) {
        this.addWishlistValidator = nod({
            submit: '.wishlist-form input[type="submit"]',
        });

        this.addWishlistValidator.add([
            {
                selector: '.wishlist-form input[name="wishlistname"]',
                validate: (cb, val) => {
                    const result = val.length > 0;

                    cb(result);
                },
                errorMessage: 'You must enter a wishlist name.',
            },
        ]);

        $addWishlistForm.on('submit', event => {
            this.addWishlistValidator.performCheck();

            if (this.addWishlistValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    wishListHandler() {
        $('body').on('click', '[data-wishlist]', event => {
            const wishListUrl = event.currentTarget.href;
            const modal = defaultModal();

            event.preventDefault();

            modal.open();

            api.getPage(wishListUrl, this.options, (err, content) => {
                if (err) {
                    return modal.updateContent(err);
                }

                modal.updateContent(content, { wrap: true });

                const $wishlistForm = $('.wishlist-form', modal.$content);

                this.registerAddWishListValidation($wishlistForm);
            });
        });
    }

    onReady() {
        const $addWishListForm = $('.wishlist-form');

        if ($addWishListForm.length) {
            this.registerAddWishListValidation($addWishListForm);
        }

        this.wishlistDeleteConfirm();
        this.wishListHandler();

        if (this.context.showInstagramFeed && this.context.instagramAccessToken) {
            const instafeed = new Instafeed({
                accessToken: this.context.instagramAccessToken,
                resolution: 'standard_resolution',
                imageTemplate: '<div class=\"instagramFeed-post\"><a href=\"{{link}}\" target="_blank"><img src=\"{{model.images.standard_resolution.url}}\"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                videoTemplate: '<div class=\"instagramFeed-post\"><a href=\"{{link}}\" target="_blank"><img src=\"{{model.images.standard_resolution.url}}\"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                // filter: (image) => image.type.indexOf('image') >= 0,
            });

            instafeed.run();
        }
    }
}
