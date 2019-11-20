module Api::V1
   class ReflectionsController < ApplicationController
        before_action :require_logged_in

        def index
          @reflections = Reflection.where(adversity_id: params[:adversity_id])
          # render json: @reflections
        end
        
        def create
          @reflection = Reflection.new(belief_params)
          if @reflection.save
            render json: @reflection
          else
            render json: @reflection.errors.full_messages, status: 422
          end
        end

        def show
          @reflection = Reflection.find(params[:id])

          render json: @reflection
        end

        def belief_params
            params.require(:reflection).permit(
                        :adversity_id,
                        :belief_text,
                        :control_level,
                        :ability_level,
                        :need,
                        :need_level,
                        :need_reason,
                        :pressure_level)
        end
    end
end