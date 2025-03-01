import json

# Function to import the data from the JSON file
def import_data(filename):
    """Imports json file data."""
    with open(filename, 'r') as file:
        data = json.load(file)
    return data

if __name__ == "__main__":
    data = import_data("data.json")
    print(data)