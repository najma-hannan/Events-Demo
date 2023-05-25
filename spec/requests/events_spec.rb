require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe "GET /index" do
<<<<<<< HEAD
    it "returns http success" do
      get "/events/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/events/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/events/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/events/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/events/destroy"
      expect(response).to have_http_status(:success)
    end
  end

=======
    pending "add some examples (or delete) #{__FILE__}"
  end
>>>>>>> e9a31bf9e6848f91873b07a4cb543dce1328888d
end
