class StaticPagesController < ApplicationController
  def show
    page_name = (params[:page] + "_page").classify

    @item = page_name.constantize.instance rescue nil
    # shared elements on all pages
    @site = AdoptionHomePage.instance

    render "static_pages/#{params[:page]}"
  end
end
