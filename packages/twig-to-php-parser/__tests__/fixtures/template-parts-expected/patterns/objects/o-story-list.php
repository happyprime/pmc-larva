<?php
// This is a generated file. Refer to the relevant Twig file for adjusting this markup.
?>
<ul class="o-story-list <?php echo esc_attr( $modifier_class ?? '' ); ?> <?php echo esc_attr( $o_story_list_classes ?? '' ); ?>">
	<?php foreach ( $o_story_list_teases ?? [] as $item ) { ?>
		<li class="o-story-list__item <?php echo esc_attr( $o_story_list_item_classes ?? '' ); ?>">
			<?php \PMC::render_template( CHILD_THEME_PATH . '/template-parts/patterns/objects/o-tease.php', $item, true ); ?>
		</li>
	<?php } ?>
</ul>
