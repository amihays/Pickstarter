class SessionsController < ApplicationController
  before_action :require_signed_out!, only: [:new, :create]

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid Login Credentials"]
      render :new
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
