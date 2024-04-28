1. Initialize a variable currentImageIndex to 1 // Start with the first image

2. Define a constant totalImages to the total number of images
3. Create a function changeImage(direction) to handle image navigation:
   a. Retrieve the current image element by its ID using currentImageIndex
   b. Hide the current image element by setting its display property to 'none'
   c. If direction is 'next':
   i. If currentImageIndex is equal to totalImages, set currentImageIndex to 1 (cyclic behavior)
   ii. Otherwise, increment currentImageIndex by 1
   d. Else if direction is 'previous':
   i. If currentImageIndex is equal to 1, set currentImageIndex to totalImages (cyclic behavior)
   ii. Otherwise, decrement currentImageIndex by 1
   e. Retrieve the next image element by its ID using the updated currentImageIndex
   f. Show the next image element by setting its display property to 'block'
   g. Handle cyclic behavior:
   i. If currentImageIndex is equal to 1: - Retrieve the last image element by its ID - Update the src attribute of the last image element with the src of the next image element
   ii. Else if currentImageIndex is equal to totalImages: - Retrieve the first image element by its ID - Update the src attribute of the first image element with the src of the next image element
4. Call the changeImage() function whenever the "Next" or "Previous" icons are clicked, passing the direction as an argument
