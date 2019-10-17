module Api::V1
   class BeliefsController < ApplicationController
        before_action :require_logged_in

        def index
          @beliefs = Belief.all
          render json: @beliefs
        end
        
        def create
          @belief = Belief.new(belief_params)
          if @belief.save
            render json: @belief
          else
            render json: @belief.errors.full_messages, status: 422
          end
        end

        def show
          @belief = Belief.find(params[:id])

          render json: @belief
        end

        def belief_params
            params.require(:belief).permit(
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