<?php declare(strict_types = 1);

/**
 * @file
 * Theme settings form for sanmigue theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function sanmigue_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['sanmigue'] = [
    '#type' => 'details',
    '#title' => t('sanmigue'),
    '#open' => TRUE,
  ];

  $form['sanmigue']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
