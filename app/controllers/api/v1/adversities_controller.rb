module Api::V1
  class AdversitiesController < ApplicationController
  def index
    @adversities = Adversity.where(user_id: params[:user_id])

    render json: @adversities
  end

  def create
    @adversity = Adversity.create(adversity_params)
    if @adversity.save
      render json: @adversity
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
        :title,
        :story
    )
  end
end
end

