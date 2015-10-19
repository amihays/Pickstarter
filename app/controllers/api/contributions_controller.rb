class Api::ContributionsController < ApplicationController
  def create
    @contribution = Contribution.new(contribution_params)
    @contribution.user_id = current_user.id
    if @contribution.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  private
  def contribution_params
    params.require(:contribution).permit(:project_id, :amount)
  end
end
