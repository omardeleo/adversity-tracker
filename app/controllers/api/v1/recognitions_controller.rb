module Api::V1
   class RecognitionsController < ApplicationController
        def create
            @recognition = Recognition.new(recognition_params)
            if @recognition.save
            render json: @recognition
            else
            render json: @recognition.errors.full_messages, status: 422
            end
        end

        def recognition_params
            params.require(:recognition).permit(:adversity_id, :story)
        end
    end
end