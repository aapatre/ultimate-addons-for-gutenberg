<?php
/**
 * UAGB Config.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Config' ) ) {

	/**
	 * Class UAGB_Config.
	 */
	class UAGB_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array(
					'uagb/section'          => array(
						'slug'       => '',
						'title'      => __( 'Section', 'ultimate-addons-for-gutenberg' ),
						'attributes' => array(
							'topPadding'             => '20',
							'bottomPadding'          => '20',
							'leftPadding'            => '20',
							'rightPadding'           => '20',
							'topMargin'              => '0',
							'bottomMargin'           => '0',
							'leftMargin'             => '0',
							'rightMargin'            => '0',
							'contentWidth'           => 'boxed',
							'width'                  => '900',
							'innerWidth'             => '1140',
							'tag'                    => 'section',
							'backgroundType'         => 'none',
							'gradientColor1'         => '',
							'gradientColor2'         => '',
							'backgroundVideoColor'   => '',
							'backgroundPosition'     => 'center-center',
							'backgroundSize'         => 'cover',
							'backgroundRepeat'       => 'no-repeat',
							'backgroundAttachment'   => 'scroll',
							'gradientType'           => 'linear',
							'gradientLocation1'      => '0',
							'gradientLocation2'      => '100',
							'gradientAngle'          => '0',
							'backgroundColor'        => '',
							'backgroundOpacity'      => '0',
							'backgroundVideoOpacity' => '50',
							'backgroundImageColor'   => '',
							'align'                  => 'center',
							'borderStyle'            => 'none',
							'borderWidth'            => '1',
							'borderRadius'           => '',
							'borderColor'            => '',
						),
					),
					'uagb/advanced-heading' => array(
						'slug'       => '',
						'title'      => __( 'Advanced Heading', 'ultimate-addons-for-gutenberg' ),
						'attributes' => array(
							'headingTitle'    => '',
							'headingDesc'     => '',
							'headingAlign'    => 'center',
							'headingColor'    => '',
							'subHeadingColor' => '',
							'separatorColor'  => '',
							'headingTag'      => 'h2',
							'separatorHeight' => '',
							'separatorWidth'  => '',
							'headFontSize'    => '',
							'subHeadFontSize' => '',
							'headSpace'       => 15,
							'separatorSpace'  => 15,
							'subHeadSpace'    => '',
						),
					),
					'uagb/info-box'         => array(
						'slug'       => '',
						'title'      => __( 'InfoBox', 'ultimate-addons-for-gutenberg' ),
						'attributes' => array(
							'headingAlign'        => 'center',
							'headingColor'        => '',
							'subHeadingColor'     => '',
							'prefixColor'         => '',
							'prefixFontSize'      => '',
							'headFontSize'        => '',
							'subHeadFontSize'     => '',
							'separatorWidth'      => '',
							'separatorHeight'     => '',
							'headSpace'           => '10',
							'separatorSpace'      => '10',
							'subHeadSpace'        => '10',
							'icon'                => '',
							'iconColor'           => '#333',
							'iconSize'            => '40',
							'iconimgPosition'     => 'above-title',
							'block_id'            => '',
							'iconHover'           => '',
							'iconimgBorderRadius' => '0',
							'seperatorStyle'      => 'solid',
							'seperatorWidth'      => '30',
							'seperatorColor'      => '#333',
							'seperatorThickness'  => '2',
							'ctaLinkColor'        => '#333',
							'ctaFontSize'         => '12',
							'ctaLineHeight'       => '12',
							'ctaBtnLinkColor'     => '#333',
							'ctaBgColor'          => 'transparent',
							'ctaBtnVertPadding'   => '10',
							'ctaBtnHrPadding'     => '14',
							'ctaBorderStyle'      => 'solid',
							'ctaBorderColor'      => '#333',
							'ctaBorderWidth'      => '1',
							'ctaBorderRadius'     => '0',
							'prefixSpace'         => '5',
							'iconLeftMargin'      => '5',
							'iconRightMargin'     => '10',
							'iconTopMargin'       => '5',
							'iconBottomMargin'    => '5',
							'imageSize'           => 'thumbnail',
							'imageWidth'          => '120',
							'seperatorSpace'      => '15',
						),
					),
					'uagb/buttons'          => array(
						'slug'       => '',
						'title'      => __( 'Multi Buttons', 'ultimate-addons-for-gutenberg' ),
						'attributes' => array(
							'block_id'  => '',
							'align'     => 'center',
							'btn_count' => '2',
							'buttons'   => UAGB_Helper::get_button_defaults(),
							'gap'       => 10,
							'stack'     => 'none',
						),
					),
					'uagb/google-map'       => array(
						'slug'       => '',
						'title'      => __( 'Google Map', 'ultimate-addons-for-gutenberg' ),
						'attributes' => array(
							'markers'           => array(
								array(
									'lat'         => '51.503333',
									'lon'         => '-0.119562',
									'title'       => 'Coca-Cola London Eye',
									'desc'        => '',
									'infoTrigger' => 'none',
								),
							),
							'block_id'          => '',
							'align'             => 'center',
							'marker_count'      => 1,
							'mapType'           => 'roadmap',
							'mapSkin'           => 'standard',
							'customStyle'       => '',
							'zoom'              => 12,
							'height'            => 500,
							'fullscreenControl' => 'true',
							'gestureHandling'   => 'true',
							'streetViewControl' => 'true',
							'mapTypeControl'    => 'true',
							'zoomControl'       => 'true',
							'cluster'           => 'false',
						),
					),
				);
			}
			return self::$block_attributes;
		}
	}
}