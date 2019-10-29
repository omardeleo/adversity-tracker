module Api::V1
  class AdversitiesController < ApplicationController
    before_action :require_logged_in

    def index
      @adversities = Adversity.where(user_id: params[:user_id])

      render json: @adversities.to_json(:include => { :beliefs => {}, 
                                                      :recognitions => {
                                                            :include => [:feelings] } 
                                                    })
    end

    def create

    @adversity = Adversity.create(adversity_params)
      if @adversity.save
      render json: @adversity.to_json(:include => { :beliefs => {}, 
                                                      :recognitions => {
                                                            :include => [:feelings] } 
                                                    })
      else
        render json: @adversity.errors.full_messages, status: 422
      end
    end

    def show
      @adversity = Adversity.find(params[:id])

      render json: @adversity
    end

    def adversity_params
      params.require(:adversity).permit(
          :user_id, 
          :title
      )
    end
  end
end

