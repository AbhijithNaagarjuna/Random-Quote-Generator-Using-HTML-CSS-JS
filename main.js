$(document).ready(function()
		 {
		 $('#wrapper').hide();
	     
		 	 var quoteSource = [ 
	     {quote: "'You' the only thing which will change your life <br>- Abhijith Naagarjuna"},
		 {quote: "You don't learn to walk by following rules. You learn by doing, and by falling over. <br> - Richard Benson"},
		 {quote: "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.<br> - Steve Jobs"},
		 {quote: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. <br> - Bill Gates"},
		 {quote: "Only when the tide goes out do you discover who’s been swimming naked.<br> - Warren Buffet"},
		 {quote: "Arise,awake and donot stop until the goal is reached.<br> - Swami Vivekananda"},
		 {quote: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far. <br> - Swami Vivekananda"},
		 {quote: "Man needs his difficulties because they are necessary to enjoy success. <br> - APJ Abdul Kalam"},
		 {quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. <br> - Ralph Waldo Emerson"},
		 {quote: "If you spend too much time thinking about a thing, you'll never get it done. <br> - Bruce Lee" },
		 {quote: "Life will knock us down, but we can choose whether or not to stand back up. <br> - Karate Kid"},
		 {quote: "I have failed over and over and over again in my life and that is why I succeed.<br>I can accept failure, everyone fails at something. But I cant accept not trying.<br>Some people want it to happen, some wish it would happen, others make it happen. <br> - Micheal Jordan"},
		 {quote: "If you judge people, you have no time to love them.<br> - Mother Teresa"},
		 
		 
		 ];
		 
         $('#b1').click(function(evt)
		         {	
                     $("#wrapper").fadeIn(1000);
				     var quote = $('#wrapper p').text();
				     evt.preventDefault();
				     var sourceLength = quoteSource.length;
				     var randomNumber = Math.floor(Math.random()*sourceLength);
				     for(i=0;i<=sourceLength;i+=1)
				   {
				         var newQuoteText = quoteSource[randomNumber].quote;
				         var timeAnimation = 500;
				         var quoteContainer = $('#wrapper');
				         quoteContainer.fadeOut(timeAnimation, function()
				         {
                          quoteContainer.html('');
				          quoteContainer.append('<p>'+newQuoteText+'</p>');
				          quoteContainer.fadeIn(timeAnimation);
  
				         });
                     } 				   
	            });
		 
		 });
