<?php

use Kirby\Cms\App as Kirby;

Kirby::plugin('texnixe/filesarea', [
	'areas' => [
		'files' => [
			'label'   => 'Files',
			'icon'    => 'archive',
			'menu'    => true,
			'views' => [
				require __DIR__ . '/views/files.php'
			]
		]
	]
]);