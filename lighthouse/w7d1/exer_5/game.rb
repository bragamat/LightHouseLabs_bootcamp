require "./players"
require "./questions"

class Game
  def initialize
    puts "Please Type the the 1st name"
    player1 = Player.new(gets.chomp)
    puts "Please Type the the 2nd name"
    player2 = Player.new(gets.chomp)
    @players = [player1, player2]
  end

  def play
    while (not game_over?)
      current_player = @players.first
      mathQuestion
      current_player.wrongQuestion

      puts "the question was made"
      swap_current_player
    end
  end

  private

  def swap_current_player
    @players.rotate!
  end

  def mathQuestion
    puts "How much is 2 + 2 ?"
    # puts "#{:hp} huehuehue"
    if(gets.chomp != 4)

    end
    return
  end

  def game_over?
    @players.any? {|player| player.is_dead?}
  end
end