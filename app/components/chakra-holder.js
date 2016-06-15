import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['chakraHolder col-sm-12 col-xs-12 col-md-10 col-md-offset-1'],

	didInsertElement: function() {
  		this._super(...arguments);
  		TweenMax.staggerFrom(".cardHolder", .9, {scale: 0}, .6);

		},

	chakras:[
		{
			chakra: 'Root Chakra',
			img: 'assets/images/chakras/rootChakra.jpg',
			color: 'Ruby Red',
			des: 'The Root Chakra grounds your physical self to the Life Force Energy of Earth, and it gives stability (this is most important, for you must honor and maintain the physical body while reaching for the stars). When this chakra is functioning properly and in balance, you will have more vitality, courage and self-confidence. It will help you release old survival and scarcity issues, and help you to tap into your treasure chest of abundance.',
			statement:' “I LIVE.”',
			tone:'UH (HUH).',
			declaration:'I AM NOW ACCESSING AND INTEGRATING THE POWER OF UNITY AND ONENESS, AND MY CONNECTION WITH THE EARTH AND ALL ABUNDANCE.” BREATHE DEEPLY. EITHER BY ENVISIONING OR USING YOUR IMAGINATION, SEE THE SPHERE OF LIGHT, WHICH REPRESENTS YOUR ROOT CHAKRA, BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES FROM THE FIRST CHAKRA UP INTO THE SECOND CHAKRA (LOCATED JUST BELOW THE NAVEL). SAY: “I AM ONE WITH THE DIVINE CREATOR SOURCE.'
		},
		{
			chakra: 'Naval Chakra',
			img: 'assets/images/chakras/sacralChakra.jpg',
			color: 'Orange',
			des: 'This is the seat of your physical/emotional self. When this chakra is in balance, you are no longer plagued by self-doubt, addictions, or sexual issues. You become attuned to the wisdom of your Soul Mind instead of the ego mind, and gradually, all of the old self-limiting thought patterns of the subconscious mind are replaced with self-confidence and emotional stability. You begin to take back your personal power as you learn to create joy, peace and prosperity instead of fear and limitation.',
			statement:'“I FEEL.”',
			tone:'OO (YOU).',
			declaration:'“I AM NOW ACCESSING AND INTEGRATING THE POWER OF PASSION WITH SPIRIT AS MY DIRECTOR. MY DESIRE IS TO CREATE JOY, PEACE AND PROSPERITY TO ENJOY AND SHARE WITH OTHERS.” BREATHE DEEPLY. SEE THE SPHERE OF LIGHT WHICH REPRESENTS YOUR SECOND CHAKRA BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES UP FROM THE SECOND CHAKRA TO THE THIRD CHAKRA (SOLAR PLEXUS). SAY: “I AM WHOLE AND COMPLETE WITHIN MYSELF.”'
		},
		{
			chakra: 'Solar Plexus Chakra',
			img: 'assets/images/chakras/solarPlexus.jpg',
			color: 'Sun Yellow',
			des: 'This is the seat of your physical/mental self. When this chakra begins to spin in harmony, and only a few discordant energies remain, your self-esteem returns, knowledge turns into wisdom and clarity of thought. You regain self-control, and you become the master of your desires. You learn to set boundaries, and to honor the boundaries of others, as you draw forth energy from the Universal Source of Life Substance, and your own GOD SEED ATOM (I AM Presence), instead of tapping into the energies of those around you. The activation of your Solar Power Center begins at this point (SOLAR PLEXUS, HEART, THROAT AND THYMUS).',
			statement:'',
			tone:'OH (GO).',
			declaration:'“I AM NOW ACCESSING MY PERSONAL POWER CENTER, AND I TAKE CONTROL OF MY EMOTIONS. I AM THE MASTER OF MY DESIRES. I SET CLEARLY-DEFINED BOUNDARIES.” BREATHE DEEPLY. SEE THE SPHERE OF LIGHT, WHICH REPRESENTS YOUR THIRD CHAKRA, BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES UP FROM THE THIRD CHAKRA TO THE FOURTH CHAKRA (HEART). SAY: “I AM THE POWER TO CREATE.”'
		},
		{
			chakra: 'Heart Chakra',
			img: 'assets/images/chakras/heartChakra.jpg',
			color: 'Emerald Green',
			des: 'The Heart Chakra is the gateway to the higher chakras, which connect you to the Soul Self and your Fifth-Dimensional SACRED TRIAD. When your Heart Chakra is unbalanced or mostly shut down, you will function primarily as an instinctual human being, who is governed by the three lower chakras of the physical self. As you balance the energies of the heart mind/emotions (the LIFE AND LOVE FORCE ENERGY CENTERS of the body), you will tap into the unconditional Love Force of the God Mind. You swiftly release all energies and thought patterns which manifest as jealousy, envy, selfishness, guilt, or feelings of unworthiness. As you ignite the Three-fold Flame of Divine Will, Wisdom and Love, you will begin to develop a compassionate nature, and a oneness with life and all things.',
			statement:'“I LOVE.”',
			tone:'AH (FATHER).',
			declaration:'“I NOW ACTIVATE MY EMOTIONAL AND MY SOLAR POWER LIFE FORCE CENTERS. I RECEIVE AND PROJECT ONLY LOVE/LIGHT ENERGY. I OPEN MY HEART TO THE DIVINE FLOW OF SPIRIT.” BREATHE DEEPLY. SEE THE SPHERE OF LIGHT, WHICH REPRESENTS YOUR FOURTH CHAKRA, BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER, UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES UP FROM THE FOURTH CHAKRA TO THE FIFTH CHAKRA (THROAT). SAY:” I AM UNIVERSAL LOVE.”'
		},
		{
			chakra: 'Throat Chakra',
			img: 'assets/images/chakras/throatChakra.jpg',
			color: 'Carolina Blue',
			des: 'The Throat Chakra is connected to the astral / emotional plane or mental / causal plane, depending on the vibrational frequencies of the thoughts and words you project. This may seem confusing; however, since you create your own reality by the frequency patterns you radiate, the law of attraction assures that the lower frequencies you send forth will attract astral plane energies, and the higher ones will tap into the mental planes of consciousness. The ascension process entails mastering the physical plane, the astral (emotional) plane, the mental plane and, eventually, up into the Fifth Dimension, which is our Divine Blueprint Goal” for this Round of Ascension. Communication, the power of the spoken word, is one of the most important tools on the physical plane. When you begin to use the language of Love / Light and Soul talk, you will always speak your highest truth, you will be expressive and creative in speech, as well as in the written word, and you will become proficient in manifesting your vision for the future.',
			statement:'“I SPEAK.”',
			tone:'I (EYE).',
			declaration:'“I AM NOW ACCESSING MY WILL POWER CENTER THROUGH THE POWER OF COMMUNICATION AND SELF-EXPRESSION. I WILL SPEAK MY TRUTH WITH INTEGRITY AND DISCERNMENT. BREATHE DEEPLY. SEE THE SPHERE OF LIGHT WHICH REPRESENTS YOUR FIFTH CHAKRA BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES UP FROM THE FIFTH CHAKRA TO THE SIXTH CHAKRA (THIRD EYE). SAY: “I AM PERFECT EXPRESSION.”'
		},
		{
			chakra: 'Third Eye Chakra',
			img: 'assets/images/chakras/thirdEyeChakra.jpg',
			color: 'Ocean Blue',
			des: 'The brow or Third Eye Chakra opens the door to the “inner senses.” First, by re-establishing the connection between you and your unconscious self (subconscious mind), and gradually, with your Higher Self, as the pure Cosmic Light Substance of the God Mind (called Rays) is allowed to enter and activate your God consciousness (the Inner Essence of you). You will move through the whispers of intuition into a “knowing” that you are being guided and inspired by Spirit. New knowledge, creative ideas and inspiration from the higher mental and intuitive planes will be accessible to you as you clear the distortions. Do not fear the seemingly dark energies or thought forms that float into your consciousness or before your eyes during meditation, beloveds, for these are your own miscreations coming to the fore to be healed and transmuted into Light. Love is the dynamic, cohesive Force of Creation, and when Love/Light is shined on any misqualified thought frequency, it is Lightened, and eventually transmuted. Also, remember to use the gift of the Violet Flame.',
			statement:'“I SEE.”',
			tone:'AYE (SAY).',
			declaration:'“I AM NOW ACCESSING THE POWER OF MY INTUITIVE MIND. I HAVE CLEAR INSIGHT, AND I LISTEN ATTENTIVELY AS I TAP INTO MY INNER WISDOM AND THE WISDOM OF MY HIGHER SELF.” BREATHE DEEPLY. SEE THE SPHERE OF LIGHT, WHICH REPRESENTS YOUR SIXTH CHAKRA, BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN, AND A SHAFT OF LIGHT MOVES UP FROM THE SIXTH CHAKRA TO THE SEVENTH CHAKRA (THE CROWN). SAY: “I AM A PERFECT INSTRUMENT OF CLARITY AND WISDOM.”'
		},
		{
			
			chakra: 'Crown Chakra',
			img: 'assets/images/chakras/crownChakra.jpg',
			color: 'Violet',
			des: 'When the Crown Chakra is activated your Column of Light is opened, in preparation for the integration of the many levels of your OverSoul/High Selves. Gradually, as you progress, the wisdom, gifts and treasures stored within your SACRED TRIAD, which resides in the Fifth Dimension, will become available to you. As you demonstrate that you are ready to live and radiate the Love / Light / Truth of Creation, you will be infused with an ever-increasing flow of the attributes, qualities and virtues of the Twelve Rays of God Consciousness.',
			statement:'“I AM.”',
			tone:'EEE (ME).',
			declaration:'“I AM NOW ACCESSING MY SPIRITUAL POWER AND THE CONNECTION TO MY DIVINE GOD SEED ATOM, WHICH IS MY CENTER OF ENLIGHTENMENT / INSPIRATION /WISDOM.” BREATHE DEEPLY. SEE THE SPHERE OF LIGHT WHICH REPRESENTS YOUR SEVENTH CHAKRA BEGIN TO SPIN FASTER AND FASTER, BECOMING LIGHTER AND BRIGHTER UNTIL IT BURSTS INTO A RADIANT SUN AND A SHAFT OF LIGHT MOVES UP FROM THE SEVENTH CHAKRA TO THE SOUL STAR. (THE SOUL STAR CHAKRA IS 6″ TO 8″ ABOVE THE CROWN OF YOUR HEAD.)'
		}


	]

});
