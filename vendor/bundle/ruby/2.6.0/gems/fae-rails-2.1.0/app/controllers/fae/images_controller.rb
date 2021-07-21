module Fae
  class ImagesController < ApplicationController

    #ajax delete action
    #
    #post 'images/:id/delete_image' => 'images#delete_image', as: :delete_image
    #here we just remove the asset from the attached image model, because if we deleted
    #the model itself, re-uploading a new one would break.
    def delete_image
      image = Image.find_by_id(params[:id])
      image.remove_asset = true
      image.save
      CarrierWave.clean_cached_files!
      head :ok
    end

    # ajax action
    #
    # Called from the Trumbowyg JS wysiwyg editor when embedding images to a
    # HTML field.
    def create_html_embedded
      image = Image.create! asset: params[:image]
      render json: { success: true, file: image.asset.url }
    end

  private

    #allow mass assignment
    def image_params
      if params[:image].present?
        params.require(:image).permit!
      else
        nil
      end
    end
  end
end
