class Player 

  attr_accessor :player, :hp
  def initialize(name)
    @player = name
    @hp = 3
  end

  def is_dead?
    @hp <=0
  end

  def wrongQuestion
    puts "You got it wrong"
    @hp -= 1
  end

end