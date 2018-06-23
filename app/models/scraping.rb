class Scraping
  def self.artwork_urls
    agent = Mechanize.new
    # プレイリストのURLを指定
    page = agent.get("https://open.spotify.com/user/tobi-411/playlist/589TKvfipT5fDYwfvYEACS")
    element_html = page.search('.artists-albums a')

    # href要素のみの抽出
    pre_url = []
    element_html.each do |ele|
      str = ele.get_attribute('href')
      pre_url.push(str)
    end
    # こんな感じに →　/artist/2FwDTncULUnmANIh7qKa5z /album/0jJ7mMkCkTe7p9EJgSRxgi

    # albumのみ抽出 /album/0jJ7mMkCkTe7p9EJgSRxgi
    url = []
    pre_url.each do |ele|
      str = ele.to_s
      if str.match(/\/album\//)
        url.push(str)
      end
    end

    url.each do |url|
      get_artwork("https://open.spotify.com" + url)
    end
  end

  def self.get_artwork(link)
    agent = Mechanize.new
    page = agent.get(link)

    # titleの取得
    element_title = page.at('meta[property="og:title"]')[:content]

    # imageの取得
    element_image = page.at('meta[property="og:image"]')[:content]

    # artistの取得
    element_artist = page.at('meta[property="twitter:audio:artist_name"]')[:content]

    # linkの取得
    element_link = page.at('meta[property="og:url"]')[:content]

    artwork = Artwork.where(title: element_title).first_or_initialize
    artwork.title = element_title
    artwork.image = element_image
    artwork.artist = element_artist
    artwork.link = element_link
    artwork.save
  end
end



