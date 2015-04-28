module Jekyll
	module ForceEncoding	
	def encoding(input, codepage)
		input.force_encoding(codepage)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ForceEncoding)