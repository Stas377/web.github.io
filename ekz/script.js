document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('country');
  const citiesSelect = document.getElementById('cities');
  const resultParagraph = document.getElementById('result');

  const citiesByCountry = {
      aus: ['Kyiv', 'Lviv', 'Odessa'],
      jap: ['Warsaw', 'Krakow', 'Gdansk'],
      sar: ['New York', 'Los Angeles', 'Chicago']
  };

  // Handle country selection change
  countrySelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.value;
      const countryName = countrySelect.options[countrySelect.selectedIndex].text;

      // Update cities dropdown
      citiesSelect.innerHTML = '';
      if (citiesByCountry[selectedCountry]) {
          citiesByCountry[selectedCountry].forEach(city => {
              const option = document.createElement('option');
              option.value = city;
              option.textContent = city;
              citiesSelect.appendChild(option);
          });
      }

      // Update result
      const selectedCity = citiesSelect.options[0]?.value || '';
      resultParagraph.textContent = `${countryName}, ${selectedCity}`;
  });

  // Handle city selection change
  citiesSelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
      const selectedCity = citiesSelect.value;
      resultParagraph.textContent = `${selectedCountry}, ${selectedCity}`;
  });

  // Trigger initial country change to populate cities on page load
  countrySelect.dispatchEvent(new Event('change'));
});
