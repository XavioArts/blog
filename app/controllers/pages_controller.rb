class PagesController < ApplicationController
    def index
        puts "index method in pages"

        pages = Page.all

        render component: "Pages", props: { pages: pages }
    end
end
