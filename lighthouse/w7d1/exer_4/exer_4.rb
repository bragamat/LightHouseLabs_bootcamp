class Person

  attr_accessor :name
  # attr_reader :name
  # attr_writer :name

  def initialize(name)
    @name = name
  end
  # def name
  #   return @name
  # end

  # def name=(value)
  #   @name = value
  # end
end

p = Person.new('L. Ron')

puts p.name

p.name = "Mateus Braga"
sleep 1 # Just to see the change happening 
puts p.name
