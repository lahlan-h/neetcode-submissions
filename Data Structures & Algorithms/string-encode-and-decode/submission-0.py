class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_string = ""

        for s in strs:
            encoded_string += str(len(s)) + ","
        
        encoded_string += "#"

        for s in strs:
            encoded_string += s;

        return encoded_string

    def decode(self, s: str) -> List[str]:
        decoded_list = []
        decoded_helper = s.split("#", 1)[0].split(",")

        start_index = s.find("#") + 1
        decoded_length = len(s) 
        decoded_helper.pop()

        for end_index in decoded_helper:
            segment = s[start_index:start_index + int(end_index)]
            decoded_list.append(segment)
            start_index = start_index + int(end_index)

        return decoded_list
    
