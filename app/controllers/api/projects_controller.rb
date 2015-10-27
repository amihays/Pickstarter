class Api::ProjectsController < ApplicationController
  def create
    project_info = project_params

    if project_info[:deadline] != ''
      project_info[:deadline] = Date.parse(project_info[:deadline])
    end
    if !project_info[:image_url]
      project_info[:image_url] = "http://res.cloudinary.com/daqcetxc6/image/upload/c_crop,h_731,w_775,x_0,y_0/v1445534918/genres/microphone.jpg"
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
    order = params[:order] || 'popularity'
    showAll = params[:allProjects] || 'false'
    if showAll === 'true'
      @projects = Project.projects_by(order)
    else
      @projects = Project.unfinished_projects_by(order)
    end
  end

  def update
    project_info = project_params
    if project_info[:deadline] != ''
      project_info[:deadline] = Date.parse(project_info[:deadline])
    end

    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.includes(:contributors, :contributions, :genre, :user).find(params[:id])
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
