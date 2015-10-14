class Api::ProjectsController < ApplicationController
  # def new
  #   @project = Project.new
  #   render :new
  # end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  # def edit
  # end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  # def index
  #   @projects = Project.all
  # end

  def show
    @project = Project.find(params[:id])
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy!
    render :show
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :genre_id, :deadline, :artist_name, :funding_goal)
  end
end
