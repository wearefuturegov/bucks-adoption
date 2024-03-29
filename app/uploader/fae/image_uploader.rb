require "google/cloud/storage"

module Fae
    class ImageUploader < CarrierWave::Uploader::Base
  
  
      include CarrierWave::MiniMagick
  
      # storage :fog
  
      # saves file size to DB
      process :save_file_size_in_model
      def save_file_size_in_model
        model.file_size = file.size
      end
  
      def extension_allowlist
        %w(jpg jpeg gif png ico svg)
      end
  
      # Override the directory where uploaded files will be stored.
      # This is a sensible default for uploaders that are meant to be mounted:
  
      # SAVING HERE CHANGE HERE THE UPLOAD
      def store_dir
        # puts CarrierWave
        # :save_file_size_in_model
        # puts storage
          # "system/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
        #   puts "TEEEEEEEEEST 2"
        #     storage = Google::Cloud::Storage.new(
        #   project_id: "bucks-outpost-273411",
        #   credentials: "config/gce.json"
        # )
      #   puts storage
      #   puts model.asset.nome
      #   puts model.to_blob
        # bucket = storage.bucket "bucks-adoption-staging"
      #   bucket.create_file StringIO.new(model), model.asset
          # bucket.create_file "public/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/#{model.asset}"
          # "AdobeStock_282626396-min-2048x1152.jpeg"
  
  
      end
  
      version :thumb do
        process :resize_to_fill => [150,100]
      end
  
    end
  end