export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getPlace = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
  if (response.ok) {
    const result = await response.json();

    const newResult = {
      ...result,
      pricePerNight: result.price_per_night,
      imageThumbnail: result.image_thumbnail,
      maxGuests: result.max_guests,
      petFriendly: result.pet_friendly,
    };
    console.log(newResult, 'new results');
    return newResult;
  } else {
    throw new Error(await response.json());
  }
};
