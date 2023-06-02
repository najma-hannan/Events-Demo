require 'rails_helper'

RSpec.describe "Tickets", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/tickets/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /index" do
    it "returns http success" do
      get "/tickets/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/tickets/edit"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/tickets/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
