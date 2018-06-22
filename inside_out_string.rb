def inside_out(s)
  newString = ""
  second_index = s.length-1
  first_index = 0

  if s.length % 2 != 0
    middleIdx = s.length/2
    newString += s[middleIdx]

    while second_index > middleIdx && first_index < middleIdx
      newString = s[first_index] + newString
      newString = newString + s[second_index]
      first_index += 1
      second_index -= 1
    end

    return newString
  end

  while second_index > first_index
    newString = s[first_index] + newString
    newString = newString + s[second_index]
    first_index += 1
    second_index -= 1
  end

  puts newString
end

inside_out('taxis')
