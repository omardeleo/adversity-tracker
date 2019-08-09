module Api::V1
    class FeelingsController < ApplicationController
        def index
            @feelings = Feeling.where(recognition_id: params[:recognition_id])

            render json: @feelings
        end

        def create
            @feeling = Feeling.create(feeling_params)
            if @feeling.save
            render json: @feeling
            else
            render json: @feeling.errors.full_messages, status: 422
            end
        end

        def show
            @feeling = Feeling.find(params[:id])

            render json: @feeling
        end

        def feeling_params
            params.require(:feeling).permit(
                :recognition_id, 
                :name,
                :intensity
            )
        end
    end
end
