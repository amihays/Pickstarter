class Api::ProjectsController < ApplicationController

  def create
    project_info = project_params

    if project_info[:deadline] != ''
      project_info[:deadline] = Date.parse(project_info[:deadline])
    end
    project_info[:user_id] = current_user.id
    @project = Project.new(project_info)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    if params[:order]
      Project.projects_by(params[:order])
    else
      @projects = Project.all
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

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
    params.require(:project).permit(:title, :description, :genre_id, :deadline, :artist_name, :funding_goal, :image_url, :sound_clip_url)
  end
end
