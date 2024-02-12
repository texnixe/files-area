<?php

return [
	'pattern' => 'files',
	'action'  => function () {
		return [
			'component' => 'k-files-view',
			'props'     => [
				'files' => function () {
					$files = site()->index()->files();

					// sort users alphabetically
					$files = $files->sortBy('filename', 'asc');

					// paginate
					$files = $files->paginate([
						'limit' => 20,
						'page'  => kirby()->request()->get('page'),
					]);

					return [
						'data'       => $files->values(fn($file) => [
							'id'    => $file->id(),
							'image' => $file->panel()->image(),
							'info'  => Escape::html($file->niceSize()),
							'link'  => $file->panel()->url(true),
							'text'  => Escape::html($file->filename()),
						]),
						'pagination' => $files->pagination()->toArray(),
					];
				},
			],
		];
	},
];