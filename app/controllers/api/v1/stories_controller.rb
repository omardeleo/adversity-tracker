module Api::V1
   class StoriesController < ApplicationController
        before_action :require_logged_in

        def create
            @story = Story.create(story_params)
            if @story.save
                render json: @story
            else
                render json: @story.errors.full_messages, status: 422
            end
        end

        private
        def story_params
            params.require(:story).permit(:recognition_id, :text)
        end
    end
end